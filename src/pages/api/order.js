import { Resend } from 'resend';

const resend = new Resend('re_boc9JmjW_5qgpqKu8RseErkmc29BCH1UD');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const orderData = req.body;

    const {
      name, email, contact, address, city, country, zipCode,
      shippingOption, paymentMethod, subTotal, shippingCost,
      discount, totalAmount, orderNote, cart
    } = orderData;

    let cartHtml = `
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Product</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Quantity</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Price</th>
          </tr>
        </thead>
        <tbody>
    `;

    if (cart && Array.isArray(cart)) {
      cart.forEach((item) => {
        cartHtml += `
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${item.title}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${item.orderQuantity}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">$${item.price}</td>
          </tr>
        `;
      });
    }

    cartHtml += `
        </tbody>
      </table>
    `;

    const emailHtml = `
      <h2>New Order Received!</h2>
      <h3>Customer Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${contact}</p>
      <p><strong>Address:</strong> ${address}, ${city}, ${country} - ${zipCode}</p>
      <p><strong>Order Note:</strong> ${orderNote || 'None'}</p>

      <h3>Order Details</h3>
      <p><strong>Payment Method:</strong> ${paymentMethod}</p>
      <p><strong>Shipping Option:</strong> ${shippingOption}</p>
      <p><strong>SubTotal:</strong> $${subTotal}</p>
      <p><strong>Shipping Cost:</strong> $${shippingCost}</p>
      <p><strong>Discount:</strong> $${discount}</p>
      <p><strong>Total Amount:</strong> $${totalAmount}</p>

      <h3>Cart Items</h3>
      ${cartHtml}
    `;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'katanaritah256@gmail.com',
      subject: `New Order from ${name} - $${totalAmount}`,
      html: emailHtml,
    });

    // We return a mock order ID so the frontend can redirect to the success page correctly
    const mockOrderId = "ORD-" + Math.random().toString(36).substring(2, 10).toUpperCase();

    res.status(200).json({
      success: true,
      data,
      order: {
        _id: mockOrderId
      }
    });
  } catch (error) {
    console.error('Resend Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
