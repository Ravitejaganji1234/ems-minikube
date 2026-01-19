package com.employees.ems.service;

import com.employees.ems.entity.Employee;
import com.employees.ems.repo.EmployeeRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepo employeeRepo;

    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    public Employee saveEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public List<Employee> getAllEmployees(){
        return employeeRepo.findAll();
    }
}
