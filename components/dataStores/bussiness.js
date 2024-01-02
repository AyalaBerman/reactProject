import { action, computed, makeAutoObservable, observable, runInAction } from "mobx";
import axios from "axios";
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';

class Bussiness {
    initial = {
        id: '1',
        name: "מנטורינג",
        address: "בני ברק",
        phone: "0556737134",
        owner: "אילה ברמן",
        description: "ליווי ותמיכה לעסקים קטנים"
    }


    logo= <img
    src = "https://www.marketingstrategy.co.il/wp-content/uploads/2022/08/coffee-792113_640.jpg"
    srcSet = "https://www.marketingstrategy.co.il/wp-content/uploads/2022/08/coffee-792113_640.jpg"
    loading = "lazy"
    alt = ""
    
/>
data = {
    id: '1',
    name: "מנטורינג",
    address: "בני ברק",
    phone: "0556737134",
    owner: "אילה ברמן",
    logo: "",
    description: "ליווי ותמיכה לעסקים קטנים"

}
constructor() {
    makeAutoObservable(this, {
        data: observable,
        getBussiness: computed,
        createBussines: action,
        updateBussiness: action
    });
    this.fetchData();
}

fetchData() {
    axios.get('http://localhost:8787/businessData').then((res) => {
        runInAction(() => {
            this.data = res.data;
            console.log(this.data);
        });
    }).catch(() => {
    })
}

fetchDataExist = async () => {
    const bus = this.data;
    await this.fetchData();
    if (this.data === {}) {
        await this.updateBussiness(bus);
        this.data = bus;

    }
}

updateBussiness(bussiness) {
    fetch('http://localhost:8787/businessData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bussiness)
    }).then(response => response.json()).then(data => {
        console.log(data);
        this.data = data;

    }).catch(err => {
        console.log(err);
    });
}
    get getBussiness() {
    if (Object.keys(this.data).length === 0)
        return this.initial;
    return this.data;
}
}

export default new Bussiness();