import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './pages/products/products.module';
import { OrdersModule } from './pages/orders/orders.module';
import { UnitsModule } from './pages/units/units.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { BrandsModule } from './pages/brands/brands.module';
import { MenusModule } from './pages/menus/menus.module';
import { UsersModule } from './pages/users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UsersModule,
    ProductsModule,
    OrdersModule,
    UnitsModule,
    CategoriesModule,
    BrandsModule,
    MenusModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
