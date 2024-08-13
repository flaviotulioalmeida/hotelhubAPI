import express from "express";
import { criarHotel, listarHotel, buscarHotelPorCNPJ, atualizarHotelPorCNPJ, deletarHotelPorCNPJ } from '../controller/HotelController.js';

const hotelRouter = express.Router();

hotelRouter.post('/', criarHotel);
hotelRouter.get('/', listarHotel);
hotelRouter.get('/:cnpj', buscarHotelPorCNPJ);
hotelRouter.put('/:cnpj', atualizarHotelPorCNPJ);
hotelRouter.delete('/:cnpj', deletarHotelPorCNPJ);

export default hotelRouter;
