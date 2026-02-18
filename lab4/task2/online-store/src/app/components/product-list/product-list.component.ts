import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [NgFor, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly products: Product[] = [
    {
      id: 1,
      name: 'Термопаста Arctic MX-4 4 г',
      description: 'Термопаста Arctic MX-4 — оптимальный выбор для пользователей, стремящихся к высокому качеству теплоотведения в своих системах. С её помощью вы сможете обеспечить эффективный теплообмен и продлить срок службы компонентов вашего ПК.',
      price: 649,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hff/hc3/82331889434654.jpg?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/termopasta-arctic-mx-4-4-g-109576930/?c=750000000'
    },
    {
      id: 2,
      name: 'SSD Kingston SNV3S/1000G 1000 Гб',
      description: 'Kingston’s NV3 PCIe 4.0 NVMe SSD — это новое решение для хранения данных на основе контроллера NVMe Gen 4x4, обеспечивающее скорость чтения/записи до 6000/5000 МБ/с.',
      price: 79500,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcd/p3a/11296042.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb1/p3a/11296043.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p94/p3a/11296044.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/ssd-kingston-snv3s-1000g-1000-gb-123793481/?c=750000000'
    },
    {
      id: 3,
      name: 'SSD Kingston SA400S37/480G 480 Гб',
      description: 'SSD-накопитель Kingston A400 имеет достаточно большую емкость (480 ГБ). Такого объема достаточно не только для установки операционной системы, но и для множества программ, а, возможно, и нескольких игр. ',
      price: 41999,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h50/hc5/87325424582686.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/h5c/87325424648222.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha8/hb3/87325424844830.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/ssd-kingston-sa400s37-480g-480-gb-6800659/?c=750000000'
    },
    {
      id: 4,
      name: 'Термопаста Arctic MX-6',
      description: 'Благодаря своей высокой теплопроводности, она позволяет эффективно и быстро отводить тепло от процессора или графического чипа, предотвращая перегрев и обеспечивая стабильную работу вашего оборудования.',
      price: 2887,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/hc5/65745610735646.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h71/65745906171934.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/termopasta-arctic-mx-6-107574562/?c=750000000'
    },
    {
      id: 5,
      name: 'Процессор Intel Core i5 14400F OEM',
      description: 'Процессор Intel Core i5 14400F OEM — мощное решение для современных задач, обеспечивающее высокую производительность и эффективность в работе. ',
      price: 91662,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h5a/85012887240734.png?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/intel-core-i5-14400f-oem-116212348/?c=750000000'
    },
    {
      id: 6,
      name: 'Вентилятор для корпуса PCcooler FX-120-3 FRGB',
      description: 'Представляем вентилятор PCcooler FX-120-3 FRGB — идеальный выбор для создания комфортного климата в вашем игровом ПК.',
      price: 1950,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd4/p65/37700372.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf0/p65/37700373.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0d/p66/37700374.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/pccooler-fx-120-3-frgb-101072963/?c=750000000'
    },
    {
      id: 7,
      name: 'Thermal Grizzly Kryonaut TG-K-001-RS 1 г',
      description: 'Термопаста Thermal Grizzly Kryonaut — премиальное решение для эффективного теплоотведения, обеспечивающее высокую теплопроводность и долговечность в работе.',
      price: 1823,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/h4e/64222343495710.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hca/h16/64222348312606.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/thermal-grizzly-kryonaut-tg-k-001-rs-1-g-102134444/?c=750000000'
    },
    {
      id: 8,
      name: 'Видеокарта Palit RTX 5060 Dual NE75060019P1-GB2063D 8 Гб',
      description: 'Palit GeForce RTX 5060 Dual предлагает классическую эффективность охлаждения в гладком современном черном дизайне. ',
      price: 206990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd3/p61/45597346.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p61/45597347.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p27/p62/45597349.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/palit-rtx-5060-dual-ne75060019p1-gb2063d-8-gb-140586515/?c=750000000'
    },
    {
      id: 9,
      name: 'Процессор AMD Ryzen 9 Ryzen 9 9950X3D OEM',
      description: 'Процессор AMD Ryzen 9 9950X3D представляет собой мощное решение для высокопроизводительных систем. Он работает на базовой частоте 4,3 ГГц с возможностью разгона до 5,7 ГГц в режиме boost. ',
      price: 416558,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7a/pdb/38043725.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p96/pdb/38043726.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/amd-ryzen-9-ryzen-9-9950x3d-oem-138490757/?c=750000000'
    },
    {
      id: 10,
      name: 'Оперативная память Kingston KF552C40BBK2-32 32 Гб',
      description: 'Повысьте производительность вашего компьютера с помощью модуля памяти Kingston Fury Beast! Этот комплект из двух модулей по 16 Гб каждый обеспечит вам высокую скорость работы и надежность в любых задачах.',
      price: 21995,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hd2/64003899916318.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hec/h9c/64003903619102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/hf9/64003907354654.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kingston-kf552c40bbk2-32-32-gb-104163503/?c=750000000'
    }
  ];

  trackByProductId(_index: number, product: Product): number {
    return product.id;
  }
}
