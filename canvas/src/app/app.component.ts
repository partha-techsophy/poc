import { Component } from "@angular/core";
declare const fabric: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "poc";
  fileToUpload: File = null;
  fileUrl: string;
  width:number;
  height:number;

  handleFileInput(event: any) {
    debugger;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.fileUrl = event.target.result;
          let canvas = new fabric.Canvas("viewport", {
            isDrawingMode: true
          });
          canvas.setDimensions({width:300, height:400});
          fabric.Image.fromURL(this.fileUrl, function (oImg) {
            oImg.set({
              left: 0,
              top: 0,
              angle: 0
            }).scale(1);
            oImg.scaleToHeight(canvas.getHeight())
            oImg.scaleToWidth(canvas.getWidth())
            canvas.add(oImg);
            canvas.freeDrawingBrush.color="rgba(255,0,0,.5)";
            canvas.freeDrawingBrush.width = 25;
          });

          // fabric js code with angle for image
          // let imgElement = document.getElementById('my-image');
          // let  imgInstance = new fabric.Image(imgElement, {
          //   left: 100,
          //   top: 100,
          //   angle: 30,
          //   opacity: 1
          // });
          // canvas.add(imgInstance);

      }
      reader.readAsDataURL(event.target.files[0]);
  }

  // native canvas code
    //   let canvas = document.getElementById('viewport');
    //  let  context = canvas.getContext('2d');
    //   let base_image = new Image();
    //   base_image.src = this.fileUrl;
    //   base_image.onload = function(){
    //     context.drawImage(base_image, 0, 0);
    //  }



  }
}
