const companiesService = require('../services/companies_service')

module.exports.getCompanyPhoneNumberByName = async (req, res) => {
    try {
      const companyPlaceId = await companiesService.getPlaceIdByCompanyName(req.params.companyName)
      if(companyPlaceId){
        const companyPhoneNumber = await companiesService.getPhoneNumberByPlaceId(companyPlaceId)
        
        res.status(200)
        res.send(companyPhoneNumber)
      }else{
        res.status(404)
        res.send('no Company found with this name')
      }
    } catch (err) {
        res.status(500)
        res.send(err)
        return err
    }
  }
