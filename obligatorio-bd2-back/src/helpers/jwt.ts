import jwt from 'jsonwebtoken';

const generateJWT = (uid: string) => {
    return new Promise((resolve, reject) => {
        const payload = {
            uid,
        };

        jwt.sign(
            payload,
            process.env.SECRETKEY || 'ESTODEBERIAESTARENUNDOTENVPEROESTAMOSHACIENDOTODOMAL',
            {
                expiresIn: '1h',
            },
            (err, token) => {
                if (err) {
                    console.error(err);
                    reject('Could not generate the JWT');
                } else {
                    resolve(token);
                }
            }
        );
    });
};

export default generateJWT;