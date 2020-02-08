import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.page.html',
  styleUrls: ['./administrator.page.scss'],
})
export class AdministratorPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() { }
  Bookings = [
    {
      name: "Jugos naturales",
      amount: "$2.700"
    }, 
    {
      name: "Vitamina de naranja",
      amount: "$2.700"
    }, 
    {
      name: "Vitamina de naranja con plátano natural",
      amount: "$3.200"
    }, 
    {
      name: "Chocolate caliente",
      amount: "$2.790"
    }, 
    {
      name: "Socos de manzana",
      amount: "$1.850"
    }, 
    {
      name: "Agua mineral con o sin gas",
      amount: "$1.300"
    }, 
    {
      name: "Bebidas",
      amount: "$1.350"
    }, 
    {
      name: "Limonada",
      amount: "$2.990"
    }, 
    {
      name: "Leche plátano",
      amount: "$2.450"
    }, 
    {
      name: "Tetera de té",
      amount: "$1.500"
    }, 
    {
      name: "Tetera de té con leche",
      amount: "$1.600"
    }, 
    {
      name: "Té verde mango",
      amount: "$2.350"
    }, 
    {
      name: "Té helado tradicional",
      amount: "$1.650"
    }, 
    {
      name: "Té helado con helado de agua",
      amount: "$2.990"
    },
    {
      name: "Jugos naturales",
      amount: "$2.700"
    }, 
    {
      name: "Vitamina de naranja",
      amount: "$2.700"
    }, 
    {
      name: "Vitamina de naranja con plátano natural",
      amount: "$3.200"
    }, 
    {
      name: "Chocolate caliente",
      amount: "$2.790"
    }, 
    {
      name: "Socos de manzana",
      amount: "$1.850"
    }, 
    {
      name: "Agua mineral con o sin gas",
      amount: "$1.300"
    }, 
    {
      name: "Bebidas",
      amount: "$1.350"
    }, 
    {
      name: "Limonada",
      amount: "$2.990"
    }, 
    {
      name: "Leche plátano",
      amount: "$2.450"
    }, 
    {
      name: "Tetera de té",
      amount: "$1.500"
    }, 
    {
      name: "Tetera de té con leche",
      amount: "$1.600"
    }, 
    {
      name: "Té verde mango",
      amount: "$2.350"
    }, 
    {
      name: "Té helado tradicional",
      amount: "$1.650"
    }, 
    {
      name: "Té helado con helado de agua",
      amount: "$2.990"
    }
    
  ]
  ngOnInit() {
  }

  actualiza(id){
    alert("Actualizando: " +id);
  }

  elimina(id){
    alert("Eliminado: " +id)
  }

}
