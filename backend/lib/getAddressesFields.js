const getAddressesFields = (data = {}) => {
  const addresses = data['Лист1'] || [];

  return addresses.map(address => ({
    id: +address.A,
    fullName: address.B,
    name: address.C,
    okpo: address.D,
    // address
    regionType: address.R,
    region: address.S,
    street: address.T,
    // connections
    chiefPosition: address.U,
    chiefFullName: address.V,
    chiefPhone: address.X,
    phone: address.Y,
    email: address.Z,
    // activity
    branch: address.E,
    status: address.G,
    activityType: address.H,
    subbranch: address.I,
    level1: address.AA,
    level2: address.AB,
    level3: address.AC,
    level4: address.AD,
  }))
}

module.exports = {
  getAddressesFields
};