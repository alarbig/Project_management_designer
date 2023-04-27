const router = require('express').Router();
const { User, Organization, Project } = require('../../models');

router.get ('/', async (req, res) => {
    try {
        const organizationData = await Organization.findAll({
            include: [{ model: User }, { model: Project }],
        });
        res.status(200).json(organizationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const organizationData = await Organization.findByPk(req.params.id, {
            include: [{ model: User }, { model: Project }],
        });

        if (!organizationData) {
            res.status(404).json({ message: 'No organization found with this id!' });
            return;
        }

        res.status(200).json(organizationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const organizationData = await Organization.create(req.body);
        res.status(200).json(organizationData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const organizationData = await Organization.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!organizationData) {
            res.status(404).json({ message: 'No organization found with this id!' });
            return;
        }
        res.status(200).json(organizationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const organizationData = await Organization.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!organizationData) {
            res.status(404).json({ message: 'No organization found with this id!' });
            return;
        }

        res.status(200).json(organizationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;


