# Product API Documentation

The Product API has a main route `/api/v1/products/` that allows for CRUD (Create, Read, Update, Delete) operations on available products.

## Available Methods

The Product API supports the following HTTP methods:

* `GET /api/v1/products/`: Returns a list of all available products in the database.
* `GET /api/v1/products/:id`: Returns the details of a particular product specified by its `id`.
* `PATCH /api/v1/products/:id`: Updates the details of a particular product specified by its `id`.
* `DELETE /api/v1/products/:id`: Deletes a particular product specified by its `id`.
* `POST /api/v1/products/`: Creates a new product in the database.

## Input Parameters

In the `GET`, `PATCH`, and `DELETE` methods, the `:id` parameter is used to specify the unique identifier of the product.

In the `POST` method, the following fields are required to create a new product:

* `name`: A string representing the name of the product.
* `price`: A number representing the price of the product.
* `image`: A URL representing the image of the product.

The `id` field is added automatically upon creation of a new product, and the `isBlock` parameter cannot be added or modified.

## API Responses

The Product API responds in JSON format in all cases.

* `GET /api/v1/products/`: Returns a list of all available products in the database, with the following fields for each product: `id`, `name`, `price`, `image`, and `isBlock`.
* `GET /api/v1/products/:id`: Returns the details of a particular product specified by its `id`, with the following fields: `id`, `name`, `price`, `image`, and `isBlock`.
* `PATCH /api/v1/products/:id`: Returns the updated details of a particular product specified by its `id`, with the following fields: `id`, `name`, `price`, and `image`.
* `DELETE /api/v1/products/:id`: Returns a confirmation message that the product has been deleted from the database.
* `POST /api/v1/products/`: Returns the details of the newly created product, with the following fields: `id`, `name`, `price`, and `image`.

The `isBlock` parameter is a boolean value (`true` or `false`) that indicates whether a product is editable or viewable. If `isBlock` is set to `true`, the product is not available for editing or viewing.

Made with love by AndruTRADX 💜
