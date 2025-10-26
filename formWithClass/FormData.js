class FormData {
  constructor(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
  }

  DataDisplay() {
    return `
    <h3>Student Information</h3> <br>
    <b>Name:</b> ${this.name}<br>
    <b>Address:</b> ${this.address}<br>
    <b>Phone:</b> ${this.phone}<br>
    `;
  }
}
