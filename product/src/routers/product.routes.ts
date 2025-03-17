
import express, { Router } from "express";
import { AddProduct } from "../controllers/AddProduct";
import { GetProducts } from "../controllers/GetProducts";



const ProductRouter: Router = Router();

ProductRouter.post("/addproduct", AddProduct);

ProductRouter.get("/getproducts", GetProducts);
 





export { ProductRouter }


