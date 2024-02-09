module.exports = (sequelize,DataTypes) => {
    const alias = "Movies";
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true,
        },
        created_at:{
            type:DataTypes.DATE,
            allowNull: true
        },
        updated_at:{
            type:DataTypes.DATE,
            allowNull: true
        },
        title:{
            type:DataTypes.STRING(500),
            allowNull: false,
        },
        rating:{
            type:DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false,
        },
        awards:{
            type:DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        release_date:{
            type:DataTypes.DATEONLY,
            allowNull: false,
        },
        length:{
            type:DataTypes.INTEGER.UNSIGNED,
        },
        genre_id:{
            type:DataTypes.INTEGER.UNSIGNED,
            allowNull: true,


        }
    };
    const config = {
        tableName:"movies",
        timestamps: false
    };
    const Pelicula = sequelize.define(alias,cols,config);
    return Pelicula;
}