# Jungle

A mini e-commerce application built with Rails 6.1 for purposes of teaching Rails by example.

## Setup

1. Run `bundle install` to install dependencies
2. Create `config/database.yml` by copying `config/database.example.yml`
3. Create `config/secrets.yml` by copying `config/secrets.example.yml`
4. Run `bin/rails db:reset` to create, load and seed db
5. Create .env file based on .env.example
6. Sign up for a Stripe account
7. Put Stripe (test) keys into appropriate .env vars
8. Run `bin/rails s -b 0.0.0.0` to start the server

## Database

If Rails is complaining about authentication to the database, uncomment the user and password fields from `config/database.yml` in the development and test sections, and replace if necessary the user and password `development` to an existing database user.

## Stripe Testing

Use Credit Card # 4111 1111 1111 1111 for testing success scenarios.

More information in their docs: <https://stripe.com/docs/testing#cards>

## Dependencies

- Rails 6.1 [Rails Guide](http://guides.rubyonrails.org/v6.1/)
- Bootstrap 5
- PostgreSQL 9.x
- Stripe

## Cypress

### Install Cypress

Install the cypress npm package locally:

`npm install cypress -v 12.17.4 --save-dev`

### Install gems

Add and install the appropriate gems in the appropriate section:

``` js
group :development, :test do
  gem "cypress-rails"
  gem 'database_cleaner-active_record'
end

```

`bundle install`

### Initialize Cypress

Installing Cypress and its Rails gem is not enough to start working with it. We will need to initialize it first.

In your terminal, run:

`$ bin/rails cypress:init`

Once run, we will have a cypress.config.js file at the root of the project.

### Setup for WSL in headless mode

You can run Cypress in headless mode by using the --headless flag with the cypress run command. This flag instructs Cypress to run the tests without launching the GUI.

`cypress run --headless`


### Set Up a Virtual Display (Linux)

If you need the GUI (for example, if you're running Cypress with cypress open), you can set up a virtual display using Xvfb (X Virtual Framebuffer).

Install Xvfb:

`sudo apt-get install xvfb`

Then run Cypress with Xvfb:

`xvfb-run cypress open`

If that doesn't work you can try openning up the virtual display using this:

`bin/rails cypress:open`

### Ensure $DISPLAY is Set:

If you're on a system with a GUI but $DISPLAY is not set, you can manually set it. Try this:

`export DISPLAY=:0`

### Final notes

Make sure you change your 'baseUrl' to your respective localhost server in the 'cypress.config.js' file before running cypress
