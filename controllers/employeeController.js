import Employee from "../models/Employee.js";

/* GET ALL (ONLY LOGGED USER DATA) */
export const getAll = async (req, res) => {
  try {
    const data = await Employee
      .find({ user: req.user })
      .sort({ createdAt: -1 });

    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* GET ONE */
export const getOne = async (req, res) => {
  try {
    const emp = await Employee.findOne({
      _id: req.params.id,
      user: req.user
    });

    if (!emp) {
      return res.status(404).json({ msg: "Employee not found" });
    }

    res.json(emp);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

/* CREATE (ATTACH USER) */
export const create = async (req, res) => {
  try {
    const emp = await Employee.create({
      ...req.body,
      user: req.user
    });

    res.json(emp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* UPDATE (ONLY OWN RECORD) */
/* UPDATE */
export const update = async (req, res) => {
  try {
    const emp = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" } // ✅ new replacement option
    );
    res.json(emp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


/* DELETE (ONLY OWN RECORD) */
export const remove = async (req, res) => {
  try {
    const emp = await Employee.findOneAndDelete({
      _id: req.params.id,
      user: req.user
    });

    if (!emp) {
      return res.status(404).json({ msg: "Not allowed" });
    }

    res.json({ msg: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
