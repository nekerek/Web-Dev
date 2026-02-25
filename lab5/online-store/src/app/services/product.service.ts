import { Injectable } from '@angular/core';

import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Periphery' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Tablets' },
    { id: 4, name: 'Hardware' }
  ];

  private createProduct(
    id: number,
    categoryId: number,
    name: string,
    description: string,
    price: number,
    rating: number,
    image: string,
    images: string[],
    link: string
  ): Product {
    return {
      id,
      name,
      description,
      price,
      rating,
      image,
      images,
      link,
      likes: 0,
      categoryId
    };
  }

  private readonly products: Product[] = [
    this.createProduct(
      1,
      1,
      'Logitech G102 Lightsync Mouse Black',
      'Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью.',
      7500,
      4.8,
      'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
      [
        'https://resources.cdn-kaspi.kz/img/m/p/ha5/h08/64119543070750.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h50/hea/64119545036830.jpg?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000'
    ),
    this.createProduct(
      2,
      1,
      'Мышь Ajazz AJ159 APEX белый',
      'льтралегкая беспроводная игровая мышь AJ159 APEX с 3 режимами работы, зарядной базой RGB, сенсором PAW3950',
      28000,
      4.8,
      'https://resources.cdn-kaspi.kz/img/m/p/h70/hb3/86416444981278.jpg?format=gallery-medium',
      ['https://resources.cdn-kaspi.kz/img/m/p/p49/p65/78297671.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p11/p65/78297673.png?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/ajazz-aj159-apex-belyi-120936307/?c=750000000'
    ),
    this.createProduct(
      3,
      1,
      'Коврик для мыши Японская волна Dart 400x900x3 мм',
      'Это удобный аксессуар, который обеспечивает плавное и точное движение мыши.',
      1403,
      4.7,
      'https://resources.cdn-kaspi.kz/img/m/p/h1e/hdd/84643036626974.png?format=gallery-medium',
      ['https://resources.cdn-kaspi.kz/img/m/p/h49/h02/84643036692510.png?format=gallery-medium'],
      'https://kaspi.kz/shop/p/japonskaja-volna-dart-400x900x3-mm-chernyi-115099536/?c=750000000'
    ),
    this.createProduct(
      4,
      1,
      'Монитор 27" Xiaomi G27i 27 / P27FBB-RGGL черный',
      'Представляем монитор Xiaomi G27i с диагональю 27 дюймов, который станет отличным выбором для работы и развлечений.',
      74999,
      5,
      'https://resources.cdn-kaspi.kz/img/m/p/pcf/p2d/65976140.png?format=gallery-medium',
      ['https://resources.cdn-kaspi.kz/img/m/p/pca/p0a/54000442.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p02/p0b/54000444.jpg?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/27-xiaomi-g27i-27-p27fbb-rggl-chernyi-119298879/?c=750000000'
    ),
    this.createProduct(
      5,
      1,
      'Мышь VGN Dragonfly F1 Moba черный',
      'Игровая мышь VGN Dragonfly F1 Moba — высокопроизводительное устройство для геймеров',
      20988,
      4.7,
      'https://resources.cdn-kaspi.kz/img/m/p/he5/h65/84399956328478.jpg?format=gallery-medium',
      [],
      'https://kaspi.kz/shop/p/vgn-dragonfly-f1-moba-chernyi-114199483/?c=750000000'
    ),

    this.createProduct(
      6,
      2,
      'Ноутбук Apple MacBook Air 13 2020',
      'Маленький чип. Грандиозный прорыв',
      439776,
      4.6,
      'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      ['https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
    ),
    this.createProduct(
      7,
      2,
      'Ноутбук Lenovo IdeaPad 3 15.6"',
      'Обеспечьте полный контроль конфиденциальности при использовании ноутбука IdeaPad 3. ',
      173935,
      4.8,
      'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      ['https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/h3f/64231926562846.jpg?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000'
    ),
    this.createProduct(
      8,
      2,
      'Ноутбук ThundeRobot 911S Core D 15.6"',
      'Игровой ноутбук Thunderobot 911S Core D JT009K00F — 15.6-дюймовая модель с IPS-матрицей и разрешением 1920х1080 пикселей.',
      496983,
      4.8,
      'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
      ['https://resources.cdn-kaspi.kz/img/m/p/ha4/hf8/85301691613214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h98/hae/85301691744286.jpg?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000'
    ),
    this.createProduct(
      9,
      2,
      'Ноутбук Apple MacBook Pro 16 2021',
      'Представляем Apple MacBook Pro 16 2021 — мощный ноутбук, созданный для профессионалов и творческих людей.',
      699990,
      4.9,
      'https://resources.cdn-kaspi.kz/img/m/p/pc1/p7c/36863341.jpg?format=gallery-medium',
      ['https://resources.cdn-kaspi.kz/img/m/p/pdd/p7c/36863342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf9/p7c/36863343.jpg?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-32-gb-ssd-512-gb-macos-z14v0008d-138158355/?c=750000000'
    ),
    this.createProduct(
      10,
      2,
      'Ноутбук Acer Aspire 16"',
      'Acer Aspire 16"— мощный и стильный ноутбук, который идеально подходит для работы и развлечений. ',
      279374,
      4.9,
      'https://resources.cdn-kaspi.kz/img/m/p/p91/pf8/28407711.jpg?format=gallery-medium',
      ['https://resources.cdn-kaspi.kz/img/m/p/p75/pf8/28407712.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p21/pf8/28407715.jpg?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/acer-aspire-16-16-gb-emmc-512-gb-win-11-pro-nx-j5rem-01c-al16-52p-135804242/?c=750000000'
    ),

    this.createProduct(
      11,
      3,
      'Планшет Apple iPad A16 11 2025',
      'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! ',
      205352,
      4.7,
      'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      ['https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000'
    ),
    this.createProduct(
      12,
      3,
      'Планшет Xiaomi Redmi Pad 2 11',
      'Xiaomi Redmi Pad 2 — универсальный планшет с ярким 11-дюймовым экраном и мощным процессором MediaTek Helio G100 Ultra',
      107886,
      4.8,
      'https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=gallery-large',
      ['https://resources.cdn-kaspi.kz/img/m/p/p24/p44/46204507.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/p43/46204509.jpg?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-seryi-140639712/?c=750000000'
    ),
    this.createProduct(
      13,
      3,
      'Планшет Huawei MatePad SE AGS6-W09',
      '',
      73329,
      4.8,
      'https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=gallery-medium',
      ['https://resources.cdn-kaspi.kz/img/m/p/h26/hdf/86746842660894.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf8/hb7/86746842726430.jpg?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-6-gb-128-gb-seryi-122142537/?c=750000000'
    ),
    this.createProduct(
      14,
      3,
      'Планшет Apple iPad Pro 12.9 2022 Wi-Fi',
      'Apple iPad Pro 2022 — мощный и универсальный планшет, который станет вашим незаменимым помощником в работе, учебе',
      659962,
      4.9,
      'https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-medium',
      ['https://resources.cdn-kaspi.kz/img/m/p/p2b/pa1/78319822.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p47/pa1/78319823.png?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-wi-fi-12-9-djuim-8-gb-128-gb-seryi-107277956/?c=750000000'
    ),
    this.createProduct(
      15,
      3,
      'Планшет Samsung Galaxy Tab S10 Ultra',
      'Планшет Samsung Galaxy Tab S10 Ultra — мощное устройство с впечатляющим экраном и высокой производительностью,',
      580000,
      5,
      'https://resources.cdn-kaspi.kz/img/m/p/pe5/p5f/1647298.png?format=gallery-medium',
      ['https://resources.cdn-kaspi.kz/img/m/p/p01/p60/1647299.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p19/paa/1647300.png?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/samsung-galaxy-tab-s10-ultra-14-6-djuim-12-gb-256-gb-seryi-128152132/?c=750000000'
    ),

    this.createProduct(
      16,
      4,
      'Термопаста Arctic MX-4 4 г',
      'Термопаста Arctic MX-4 — оптимальный выбор для пользователей, стремящихся к высокому качеству теплоотведения в своих системах. С её помощью вы сможете обеспечить эффективный теплообмен и продлить срок службы компонентов вашего ПК.',
      649,
      4.9,
      'https://resources.cdn-kaspi.kz/img/m/p/hff/hc3/82331889434654.jpg?format=gallery-medium',
      [],
      'https://kaspi.kz/shop/p/termopasta-arctic-mx-4-4-g-109576930/?c=750000000'
    ),
    this.createProduct(
      17,
      4,
      'SSD Kingston SNV3S/1000G 1000 Гб',
      'Kingston’s NV3 PCIe 4.0 NVMe SSD — это новое решение для хранения данных на основе контроллера NVMe Gen 4x4, обеспечивающее скорость чтения/записи до 6000/5000 МБ/с.',
      79500,
      4.9,
      'https://resources.cdn-kaspi.kz/img/m/p/pcd/p3a/11296042.jpg?format=gallery-medium',
      [
        'https://resources.cdn-kaspi.kz/img/m/p/pb1/p3a/11296043.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p94/p3a/11296044.jpg?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/ssd-kingston-snv3s-1000g-1000-gb-123793481/?c=750000000'
    ),
    this.createProduct(
      18,
      4,
      'SSD Kingston SA400S37/480G 480 Гб',
      'SSD-накопитель Kingston A400 имеет достаточно большую емкость (480 ГБ). Такого объема достаточно не только для установки операционной системы, но и для множества программ, а, возможно, и нескольких игр. ',
      41999,
      4.9,
      'https://resources.cdn-kaspi.kz/img/m/p/h50/hc5/87325424582686.jpg?format=gallery-medium',
      [
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/h5c/87325424648222.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha8/hb3/87325424844830.jpg?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/ssd-kingston-sa400s37-480g-480-gb-6800659/?c=750000000'
    ),
    this.createProduct(
      19,
      4,
      'Термопаста Arctic MX-6',
      'Благодаря своей высокой теплопроводности, она позволяет эффективно и быстро отводить тепло от процессора или графического чипа, предотвращая перегрев и обеспечивая стабильную работу вашего оборудования.',
      2887,
      4.9,
      'https://resources.cdn-kaspi.kz/img/m/p/h59/hc5/65745610735646.jpg?format=gallery-medium',
      ['https://resources.cdn-kaspi.kz/img/m/p/h2d/h71/65745906171934.jpg?format=gallery-medium'],
      'https://kaspi.kz/shop/p/termopasta-arctic-mx-6-107574562/?c=750000000'
    ),
    this.createProduct(
      20,
      4,
      'Процессор Intel Core i5 14400F OEM',
      'Процессор Intel Core i5 14400F OEM — мощное решение для современных задач, обеспечивающее высокую производительность и эффективность в работе. ',
      91662,
      4.9,
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/h5a/85012887240734.png?format=gallery-medium',
      [],
      'https://kaspi.kz/shop/p/intel-core-i5-14400f-oem-116212348/?c=750000000'
    ),
    this.createProduct(
      21,
      4,
      'Вентилятор для корпуса PCcooler FX-120-3 FRGB',
      'Представляем вентилятор PCcooler FX-120-3 FRGB — идеальный выбор для создания комфортного климата в вашем игровом ПК.',
      1950,
      4.8,
      'https://resources.cdn-kaspi.kz/img/m/p/pd4/p65/37700372.jpg?format=gallery-medium',
      [
        'https://resources.cdn-kaspi.kz/img/m/p/pf0/p65/37700373.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0d/p66/37700374.jpg?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/pccooler-fx-120-3-frgb-101072963/?c=750000000'
    ),
    this.createProduct(
      22,
      4,
      'Thermal Grizzly Kryonaut TG-K-001-RS 1 г',
      'Термопаста Thermal Grizzly Kryonaut — премиальное решение для эффективного теплоотведения, обеспечивающее высокую теплопроводность и долговечность в работе.',
      1823,
      4.8,
      'https://resources.cdn-kaspi.kz/img/m/p/h89/h4e/64222343495710.jpg?format=gallery-medium',
      ['https://resources.cdn-kaspi.kz/img/m/p/hca/h16/64222348312606.jpg?format=gallery-medium'],
      'https://kaspi.kz/shop/p/thermal-grizzly-kryonaut-tg-k-001-rs-1-g-102134444/?c=750000000'
    ),
    this.createProduct(
      23,
      4,
      'Видеокарта Palit RTX 5060 Dual NE75060019P1-GB2063D 8 Гб',
      'Palit GeForce RTX 5060 Dual предлагает классическую эффективность охлаждения в гладком современном черном дизайне. ',
      206990,
      4.7,
      'https://resources.cdn-kaspi.kz/img/m/p/pd3/p61/45597346.jpg?format=gallery-medium',
      [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p61/45597347.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p27/p62/45597349.jpg?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/palit-rtx-5060-dual-ne75060019p1-gb2063d-8-gb-140586515/?c=750000000'
    ),
    this.createProduct(
      24,
      4,
      'Процессор AMD Ryzen 9 Ryzen 9 9950X3D OEM',
      'Процессор AMD Ryzen 9 9950X3D представляет собой мощное решение для высокопроизводительных систем. Он работает на базовой частоте 4,3 ГГц с возможностью разгона до 5,7 ГГц в режиме boost. ',
      416558,
      4.8,
      'https://resources.cdn-kaspi.kz/img/m/p/p7a/pdb/38043725.jpg?format=gallery-medium',
      ['https://resources.cdn-kaspi.kz/img/m/p/p96/pdb/38043726.jpg?format=gallery-medium'],
      'https://kaspi.kz/shop/p/amd-ryzen-9-ryzen-9-9950x3d-oem-138490757/?c=750000000'
    ),
    this.createProduct(
      25,
      4,
      'Оперативная память Kingston KF552C40BBK2-32 32 Гб',
      'Повысьте производительность вашего компьютера с помощью модуля памяти Kingston Fury Beast! Этот комплект из двух модулей по 16 Гб каждый обеспечит вам высокую скорость работы и надежность в любых задачах.',
      21995,
      4.9,
      'https://resources.cdn-kaspi.kz/img/m/p/h9f/hd2/64003899916318.jpg?format=gallery-medium',
      [
        'https://resources.cdn-kaspi.kz/img/m/p/hec/h9c/64003903619102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/hf9/64003907354654.jpg?format=gallery-medium'
      ],
      'https://kaspi.kz/shop/p/kingston-kf552c40bbk2-32-32-gb-104163503/?c=750000000'
    )
  ];

  getCategories(): Category[] {
    return this.categories.map((category) => ({ ...category }));
  }

  getProducts(): Product[] {
    return this.products.map((product) => ({
      ...product,
      images: [...product.images]
    }));
  }
}
