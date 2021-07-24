exports.postImage = (req, res, next) => {

    const imageURL = `${req.protocol}://${req.get('host')}/image/${req.file.filename}`;
    console.log(imageURL);
    res.status(201).json({ message: 'Image posted.', url: imageURL });
};

exports.getImage = (req, res, next) => {
    res.send({ message: 'get image'});
};