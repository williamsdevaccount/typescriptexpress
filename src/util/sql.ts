


export const getSqliteConnection = (filePath : string) :  =>{
    return new Sequelize({storage : filePath,dialect : 'sqlite'});
};