const express = require('express');
const router = express();

const employees = require('../employees')


router.get('/',(req,res) => {
  res.send(employees)
});

router.get('/:name',(req,res) => {
    const employee = employees.employees.find(employee => employee.name == req.params.name);
    if(!!employee) {
        res.send( {message: 'Employee found',employee} );
    } else {
        res.send( {message: ' No employee found  '} );
    }
})

router.put('/update/:name',(req,res) => {
    const employee = employees.employees.find(employee => employee.name == req.params.name);
    if(!!employee) {
        employee.email = req.body.email;
        employee.age = req.body.age;
        res.send( { message: 'Employee updated',employee } );
    } else {
        res.send( { message: ' No employee found  ' } );
    }
})

router.delete('/delete/:name',(req,res) => {
    const remainingEmployees = employees.employees.filter(employee => employee.name != req.params.name);
    res.send({ message: `${req.params.name} deleted succesfully`, employees: remainingEmployees })
})

module.exports = router