

const employees= [
    {
      "name":"ram",
      "id": 101,
      "email": "ram.shrestha@example.com",
      "password": "ram123",
      "tasks": [
        {
          "title": "Prepare Sales Report",
          "description": "Complete the monthly sales analysis report.",
          "date": "2025-02-05",
          "category": "Reporting",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Client Meeting",
          "description": "Meet the client to discuss project requirements.",
          "date": "2025-02-07",
          "category": "Meeting",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Product Research",
          "description": "Research competitor products and summarize findings.",
          "date": "2025-02-10",
          "category": "Research",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },

    {
          "name":"sita",
      "id": 102,
      "email": "sita.bhattarai@example.com",
      "password": "sita123",
      "tasks": [
        {
          "title": "Update Website",
          "description": "Fix UI bugs and update the landing page content.",
          "date": "2025-02-04",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Design Banner",
          "description": "Create a promotional banner for social media.",
          "date": "2025-02-06",
          "category": "Design",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Fix Navigation Bug",
          "description": "Resolve issue in navbar menu collapsing.",
          "date": "2025-02-08",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Test New Features",
          "description": "Perform QA testing on new feature deployment.",
          "date": "2025-02-09",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },

    {
          "name":"hari",
      "id": 103,
      "email": "hari.thapa@example.com",
      "password": "hari123",
      "tasks": [
        {
          "title": "Inventory Check",
          "description": "Count and document all new shipments.",
          "date": "2025-02-04",
          "category": "Inventory",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Warehouse Cleaning",
          "description": "Clean the storage section and arrange items.",
          "date": "2025-02-06",
          "category": "Maintenance",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Supplier Follow-Up",
          "description": "Talk to suppliers about pending orders.",
          "date": "2025-02-10",
          "category": "Communication",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },

    {
          "name":"anita",
      "id": 104,
      "email": "anita.mahara@example.com",
      "password": "anita123",
      "tasks": [
        {
          "title": "Create Presentation",
          "description": "Prepare the presentation for Monday’s meeting.",
          "date": "2025-02-03",
          "category": "Presentation",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Data Entry",
          "description": "Enter all customer feedback into the system.",
          "date": "2025-02-05",
          "category": "Data Entry",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Update Records",
          "description": "Update all outdated customer records.",
          "date": "2025-02-06",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Prepare Meeting Notes",
          "description": "Document key points from the last office meeting.",
          "date": "2025-02-09",
          "category": "Documentation",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },

    {
          "name":"sunil",
      "id": 105,
      "email": "sunil.kc@example.com",
      "password": "sunil123",
      "tasks": [
        {
          "title": "Code Review",
          "description": "Review pull requests from junior developers.",
          "date": "2025-02-03",
          "category": "Coding",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "API Testing",
          "description": "Test new API endpoints for performance.",
          "date": "2025-02-04",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Refactor Codebase",
          "description": "Optimize and clean up old modules.",
          "date": "2025-02-07",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Deploy Updates",
          "description": "Publish new version to production server.",
          "date": "2025-02-10",
          "category": "Deployment",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ]
const Admin=[
  {
    "id": 1,
    "email": "admin@123",
    "password": "admin123"
  }]
export const SetLocalStorage=()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(Admin))
}
export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const Admin=JSON.parse(localStorage.getItem("admin"))
  return{employees,Admin}


}


 


