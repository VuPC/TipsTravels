class DataModel {
    constructor() {}

    //---------- Data Home ----------//
    listDrawHome = ['Settings', 'Privacy policy', 'Support & FAQs', 'Content', 'Profile', 'Log Out']

    listDrawHome = [
        { title: 'Settings', route: 'Settings' },
        { title: 'Privacy policy', route: 'PrivacyPolicy' },
        { title: 'Support & FAQs', route: 'SupportFAQs' },
        { title: 'Content', route: 'Content' },
        { title: 'Profile', route: 'Profile' },
        { title: 'Log Out', route: 'LogOut' }
    ]

    //---------- Data Category ----------//
    listCountry = [
        { label: 'Country', value: 'Unknown' },
        { label: 'Australia', value: 'Australia' },
        { label: 'Belgium', value: 'Belgium' },
        { label: 'Canada', value: 'Canada' },
        { label: 'India', value: 'India' },
        { label: 'America', value: 'America' }
    ]

    listSelectCountry = [
        { url: '', label: 'Country' },
        { url: require('../assets/images/category/flag_america.jpeg'), label: 'America' },
        { url: require('../assets/images/category/flag_australia.jpeg'), label: 'Australia' },
        { url: require('../assets/images/category/flag_belgium.jpeg'), label: 'Belgium' },
        { url: require('../assets/images/category/flag_canada.jpeg'), label: 'Canada' },
        { url: require('../assets/images/category/flag_india.jpeg'), label: 'India' }
    ]

    listTicketPlace = ['Hotel', 'River', 'Mountain', 'Lake', 'City']

    listDataCategories = [
        {
            url: 'https://www.travelwithjane.com/wp-content/uploads/2016/03/Travel-with-Jane-Golden-Gate-Bridge-USA.jpg',
            country: 'America',
            title: 'Golden Gate Bridge'
        }
    ]
}

const GlobalDataModel = new DataModel(); 
export default GlobalDataModel;