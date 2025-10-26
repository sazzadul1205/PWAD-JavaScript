class StudentClass {
  constructor(name, roll, address) {
    this.name = name;
    this.roll = roll;
    this.address = address;
  }

  studentInfo() {
    let Output = `
    Student Information
    Name: ${this.name}
    Roll: ${this.roll}
    Address: ${this.address}
    `;

    return Output;
  }
}
