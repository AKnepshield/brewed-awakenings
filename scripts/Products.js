import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="products"
                     data-id="${product.id}"
                     data-name="${product.name}"
                     data-price="${product.price}">
                     ${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        
        if (itemClicked.dataset.type === "products") {
            const productId = itemClicked.dataset.id
            for (const product of products) {
                if (product.id === parseInt(productId)) {
                    window.alert(`${product.name} costs $${product.price.toFixed(2)}`)
                }
            }
        }
    }
)

