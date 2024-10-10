//Metodo de prueba de controlador  user
export const testUser = (req, res) => {
    return res.status(200).send({
        message: 'Mensaje enviado desde el controlador User test',
    })
};