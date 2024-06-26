import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './pages/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './pages/products/products.module';
import { OrdersModule } from './pages/orders/orders.module';
import { UnitsModule } from './pages/units/units.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { BrandsModule } from './pages/brands/brands.module';
import { MenusModule } from './pages/menus/menus.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/inventorydb'), UserModule, ProductsModule, OrdersModule, UnitsModule, CategoriesModule, BrandsModule, MenusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
