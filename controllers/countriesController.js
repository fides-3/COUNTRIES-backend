const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient()

// creating a country
exports.createCountry = async (req, res) => {
  console.log("Incoming POST  /api/countries")
  const { name, description, imageUrl } = req.body;
  try {
    const country = await prisma.country.create({
      data: { name, description, imageUrl },
    });
    res.status(201).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// getting all countries
exports.getAllCountries = async (req, res) => {
  try {
    const countries = await prisma.country.findMany();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// updating a country
exports.updateCountry = async (req, res) => {
  const { id } = req.params;
  const { name, description, imageUrl } = req.body;
  try {
    const updated = await prisma.country.update({
      where: { id: parseInt(id) },
      data: { name, description, imageUrl },
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// deleting a country
exports.deleteCountry = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.country.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Country deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};