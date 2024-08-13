import Sequelize from '../database/sequelize.js';
import { DataTypes } from 'sequelize';

const sequelize = Sequelize; 

const Hotel = sequelize.define('Hotel', {
  nome: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   cnpj: {
     type: DataTypes.STRING, 
     primaryKey: true,
     allowNull: false,
   },
   email: {
     type: DataTypes.STRING,
     unique: true,
     allowNull: false,
   }
});

async function sincronizar() {
    try {
        await sequelize.sync();
        console.log('Tabelas sincronizadas com sucesso');
    } catch (error) {
        console.error('Erro ao sincronizar as tabelas:', error);
    }
}

sincronizar();

export default Hotel;
