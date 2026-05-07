FROM node:26-alpine

ENV APP_HOME=/app

# Create non-root user before installing dependencies
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR $APP_HOME
RUN chown appuser:appgroup $APP_HOME

USER appuser

COPY --chown=appuser:appgroup package*.json ./

RUN npm ci

# Add node_modules/.bin to PATH
ENV PATH=$APP_HOME/node_modules/.bin:$PATH

COPY --chown=appuser:appgroup . .

EXPOSE 3001

CMD ["npm", "start"]
