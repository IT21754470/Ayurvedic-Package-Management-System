const treatmentModel = require('../models/treatmentModel');

exports.createTreatment = async (req, res) => {
  const { name, packageName, price, description1, description2 } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!image) {
    return res.status(400).json({ success: false, message: 'Invalid image.' });
  }

  const data = new treatmentModel({
    name,
    image,
    packageName,
    price,
    description1,
    description2,
  });

  try {
    await data.save();
    res.json({ success: true, message: 'Treatment data saved successfully', data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to save treatment data.' });
  }
};

exports.getTreatmentData = async (req, res) => {
  try {
    const data = await treatmentModel.find({});
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch treatment data.' });
  }
};
exports.updateTreatment = async (req, res) => {
  const { name, packageName, price, description1, description2 } = req.body;
  const id = req.params.id;

  try {
    const existingData = await treatmentModel.findById(id);

    if (!existingData) {
      return res.status(404).json({ success: false, message: 'Treatment data not found.' });
    }

    let updatedData = {
      name,
      packageName,
      price,
      description1,
      description2,
    };

    // Check if a new image was uploaded
    if (req.file) {
      updatedData.image = req.file.filename;

      // Delete the old image file if it exists
      if (existingData.image) {
        const fs = require('fs');
        fs.unlinkSync('uploads/' + existingData.image);
      }
    }

    // Update the treatment data
    const data = await treatmentModel.findByIdAndUpdate(id, updatedData, { new: true });

    res.json({ success: true, message: 'Treatment data updated successfully', data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update treatment data.', error: error.message });
  }
};



exports.deleteTreatment = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedData = await treatmentModel.findOneAndDelete({ _id: id });

    if (!deletedData) {
      return res.status(404).json({ success: false, message: 'Treatment data not found.' });
    }

    res.json({ success: true, message: 'Treatment data deleted successfully', data: deletedData });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete treatment data.', error: error.message });
  }
};
