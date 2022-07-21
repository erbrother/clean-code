/** Method chaining */

class Task {
  static defaultConfig = {
    name: "Untitled",
    categort: "main",
    isActive: true,
  };

  constructor(config) {
    const finalConfig = Object.assign(Task.defaultConfig, config);

    const { name, category, isActive } = finalConfig;
    this.name = name;
    this.category = category;
    this.isActive = isActive;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setCategory(category) {
    this.category = category;
    return this;
  }

  save() {
    console.log(this.name, this.category, this.isActive);
    return this;
  }
}

const task = new Task({
  name: "Recording",
  category: "DevTheory",
});

// ❌ bad
task.setName("JS book");
task.setCategory("Hi, Js");
task.save();

// ✅ good
task.setName("JS book").setCategory("Hi, Javascript").save();
