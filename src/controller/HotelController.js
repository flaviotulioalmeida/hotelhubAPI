import Hotel from '../model/hotel.js';

//Function create Hotel
const criarHotel = async (req, res) =>{
    try {
        const hotel = await Hotel.create(req.body);
        res.status(201).json(hotel);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Function get all Hotels
const listarHotels = async (req, res) => {
    try {
        const hotels = await Hotel.findAll();
        res.json(hotels);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Function get Hotel by CNPJ
const buscarHotelPorCNPJ = async (req, res) => {
    try {
        const hotel = await Hotel.findByPk(req.params.cnpj);
        if (!hotel) return res.status(404).json({ error: 'Hotel não encontrado' });
        res.json(hotel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Function update Hotel by CNPJ
const atualizarHotelPorCNPJ = async (req, res) => {
    try {
        const hotel = await Hotel.findByPk(req.params.cnpj);
        if (!hotel) return res.status(404).json({ error: 'Hotel não encontrado' });
        await hotel.update(req.body);
        res.json(hotel);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Function delete Hotel by CNPJ
const deletarHotelPorCNPJ = async (req, res) => {
    try {
        const hotel = await Hotel.findByPk(req.params.cnpj);
        if (!hotel) return res.status(404).json({ error: 'Hotel não encontrado' });
        await hotel.destroy();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { criarHotel, listarHotels, buscarHotelPorCNPJ, atualizarHotelPorCNPJ, deletarHotelPorCNPJ };