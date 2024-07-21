import * as winston from 'winston';
const { splat, combine, timestamp, printf, colorize } = winston.format;

const myFormat = printf(({ timestamp, level, message }) => {
  return `${timestamp} | ${level} | ${message}`;
});

const timezoned = () => {
  return new Date().toLocaleString('en-GB', {
    timeZone: 'Asia/Calcutta'
  });
};

const format = [timestamp({ format: timezoned }), splat()];
format.push(colorize({ level: true }));
format.push(myFormat);

export const logger = winston.createLogger({
  format: combine(...format),
  transports: [new winston.transports.Console({ level: 'debug' })]
});
