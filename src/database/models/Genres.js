module.exports = (sequelize,DataTypes) => {
    const alias ="Genres";
    const cols = {
        id:{
            type:DataTypes.INTEGER.UNSIGNED,
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
        name:{
            type:DataTypes.STRING(100),
            allowNull: false,
        },
        ranking:{
            type:DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique:true,

        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        },
    };
    const config = {
        tableName:"genres",
        timestamps: false
    };
    const Genre = sequelize.define(alias,cols,config);
    return Genre;
}