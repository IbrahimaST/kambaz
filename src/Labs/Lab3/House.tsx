export default function House() {
  const House = {
    bedrooms: 4,
    bathrooms: 2.5,
    squareFeet: 2000,
    address: {
      street: "Via Roma",
      city: "Roma",
      state: "RM",
      zip: "00100",
      country: "Italy",
    },
    owners: ["Alice", "Bob"],
  };
  console.log(House);
  return (
    <div id="wd-house">
      <h4>House</h4>
      <h5>Bedrooms</h5> {House.bedrooms}
      <h5>Bathrooms</h5> {House.bathrooms}
      <h5>Data</h5>
      <pre>{JSON.stringify(House, null, 2)}</pre> <hr />
    </div>
  );
}
