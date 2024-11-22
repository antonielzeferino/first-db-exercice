const { query } = require("../database/Pool.js")

class Product {
  constructor(ProductRow) {
    this.id = ProductRow.id
    this.name = ProductRow.name
    this.description = ProductRow.description
    this.price = ProductRow.price
    this.stockQuantity = ProductRow.stock_quantity
    this.isActive = ProductRow.is_active
    this.createdAt = new Date(ProductRow.created_at)
    this.updatedAt = new Date(ProductRow.updated_at)
  }

  static async findAll() {
    const result = await query(`SELECT * FROM products;`)
    return result.rows.map((row) => new Product(row))
  }

  static async create({ name, description, price, stockQuantity = 0, isActive = true }) {
    const result = await query(`
        INSERT INTO products (name, description, price, stock_quantity, is_active) 
        VALUES ($1, $2, $3, $4, $5) RETURNING *;
      `, [name, description, price, stockQuantity, isActive]);
    return new Product(result.rows[0]);
}

static async findById(id) {
  const result = await query(`SELECT * FROM products WHERE id = $1`, [id]);
  if (!result || !result.rows || result.rows.length === 0) return null;
  return new Product(result.rows[0]);
}


  static async update(id, attributes) {
    const product = await this.findById(id)
    Object.assign(product, attributes)
    product.updatedAt = new Date()

    await query(`
        UPDATE products SET 
          name = $1,
          description = $2,
          price = $3,
          stock_quantity = $4,
          is_active = $5,
          updated_at = CURRENT_TIMESTAMP
        WHERE id = $6;
      `,
      [
        product.name,
        product.description,
        product.price,
        product.stockQuantity,
        product.isActive,
        product.id
      ]
    )
    return product
  }

  static async delete(id) {
    await query(`DELETE FROM products WHERE id = $1;`, [id])
    return { message: "Product deleted successfuly!" }
  }

  static async deleteAll() {
    await query(`DELETE FROM products`)
    return { message: "All products deleted successfuly!" }
  }
}

module.exports = Product