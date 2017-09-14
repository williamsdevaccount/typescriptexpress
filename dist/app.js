"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain = require("domain");
const express = require("express");
const config_1 = require("./config");
const utils_1 = require("./utils");
const bodyParser = require("body-parser");
const compress = require("compression");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const hbs = require("express-handlebars");
const session = require("express-session");
const helmet = require("helmet");
const methodOverride = require("method-override");
const morgan = require("morgan");
const routes_1 = require("./routes");
class App {
    constructor() {
        this.express = express();
        this.init();
        this.middleware();
        this.router();
        this.exception();
    }
    init() {
        this.express.use((req, res, next) => {
            const d = domain.create();
            d.add(req);
            d.add(res);
            d.on('error', next);
            d.run(next);
        });
        this.express.engine('html', hbs({ extname: '.html' }));
        this.express.set('views', `${config_1.config.cwd}/views`);
        this.express.set('view engine', 'html');
        this.express.set('trust proxy', 1);
    }
    middleware() {
        this.express.use(morgan(':remote-addr - ":method :url HTTP/:http-version" ' +
            ':status :res[content-length] ":referrer" ":user-agent"'));
        this.express.use(compress({
            filter(req, res) {
                return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
            },
            level: 9
        }));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(methodOverride());
        this.express.use(cookieParser());
        this.express.use(session({
            secret: 'tEsTeD',
            resave: false,
            saveUninitialized: true,
            cookie: { secure: true }
        }));
        this.express.use(express.static(`${config_1.config.cwd}/public`));
        this.express.use(helmet());
        if (this.express.get('env') !== 'test') {
            this.express.use(csrf());
            this.express.use((req, res, next) => {
                res.cookie('XSRF-TOKEN', req.csrfToken());
                next();
            });
        }
    }
    router() {
        this.express.use('/', routes_1.mainRoute);
    }
    exception() {
        this.express.use((req, res, next) => {
            const err = new utils_1.Err('NotFound', 404);
            next(err);
        });
        this.express.use((err, req, res, next) => {
            if (res.headersSent) {
                return next(err);
            }
            if (err.name !== 'Error' || err.code) {
                err.status = 500;
            }
            if (err.status === 500) {
                console.error(err);
                const message = `${req.method}: ${req.originalUrl}\n` +
                    `IP> ${req.ip}, Body> ${JSON.stringify(req.body)}\n` +
                    `Headers> ${JSON.stringify(req.headers)}\n${err.stack}`;
                console.error(message);
            }
            res.status(err.status || 400).json({ message: err.message });
        });
    }
}
exports.app = new App().express;
//# sourceMappingURL=app.js.map