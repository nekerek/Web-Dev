from models import Car, Motorcycle, Vehicle


def main():
    vehicles = [
        Vehicle("Toyota", "Corolla", 2020),
        Car("Tesla", "Model 3", 2023, 4),
        Motorcycle("Yamaha", "R3", 2022, 321),
    ]

    for vehicle in vehicles:
        print(vehicle)
        print(vehicle.start())
        print(vehicle.describe())

        if isinstance(vehicle, Car):
            print(vehicle.open_trunk())
            print(f"Doors: {vehicle.doors}")
        elif isinstance(vehicle, Motorcycle):
            print(vehicle.do_wheelie())
            print(f"Engine size: {vehicle.engine_cc}cc")

        print("-" * 40)


if __name__ == "__main__":
    main()
