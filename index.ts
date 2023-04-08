import fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = fastify({ logger: true });

app.listen(
    {
        port: 3000,
    },
    (err, address) => {
        if (err) {
            app.log.error(err);
            process.exit(1);
        }
        app.log.info(`SERVER STARTED AT ADDRESS: ${address}`);
    }
);
