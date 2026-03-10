class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start(self):
        return f"{self.brand} {self.model} is starting."

    def describe(self):
        return f"{self.year} {self.brand} {self.model}"

    def __str__(self):
        return self.describe()


class Car(Vehicle):
    def __init__(self, brand, model, year, doors):
        super().__init__(brand, model, year)
        self.doors = doors

    def start(self):
        return f"{self.brand} {self.model} starts quietly with a keyless ignition."

    def open_trunk(self):
        return f"The trunk of {self.brand} {self.model} is now open."


class Motorcycle(Vehicle):
    def __init__(self, brand, model, year, engine_cc):
        super().__init__(brand, model, year)
        self.engine_cc = engine_cc

    def start(self):
        return f"{self.brand} {self.model} roars to life with its {self.engine_cc}cc engine."

    def do_wheelie(self):
        return f"{self.brand} {self.model} performs a wheelie."
