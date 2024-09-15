FROM node:22-alpine

ENV APP_HOME /app

RUN mkdir $APP_HOME
WORKDIR $APP_HOME

COPY package* ./
RUN npm install

# Add `/app/node_modules/.bin` to $PATH
ENV PATH $APP_HOME/node_modules/.bin:$PATH

# Create a new user with least privileges
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Create necessary directories and set permissions
RUN mkdir -p $APP_HOME/logs $APP_HOME/tmp \
  && chown -R appuser:appgroup $APP_HOME

# Switch to the new user
USER appuser

COPY --chown=appuser:appgroup . $APP_HOME

EXPOSE 3001

CMD ["npm", "start"]
