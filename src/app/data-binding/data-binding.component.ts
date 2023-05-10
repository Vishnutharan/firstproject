import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  // String Interpulation
  title = "This Is String Interpulation";
  numberA: number = 10;
  numberB: number = 20;
  addTwoNumbers(){
    return this.numberA+ this.numberB;
  }
  imgUrl = "https://www.google.com/search?q=apple&source=lnms&tbm=isch&sa=X&ved=2ahUKEwibvK_kgsH7AhXeyHMBHdChBhAQ_AUoAnoECAIQBA&biw=1536&bih=746&dpr=1.25#imgrc=8XlgZHIOQp-gjM";

// This Is Event Binding
 onSave($event: any){ {
    console.log("This Is Event Binding Button ",$event);

  }

  // Two Way Binding
 // fullName: string = "Hello JavaTpoint";    

  }
}

