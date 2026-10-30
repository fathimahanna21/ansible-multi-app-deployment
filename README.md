# Ansible Multi-Application Deployment

## Project Overview

This project uses Ansible to automate the deployment of a multi-application environment on a remote Ubuntu machine.

The deployment is organised into three reusable Ansible roles:

1. **Nginx:** Installs and configures Nginx as a reverse proxy.
2. **Flask:** Deploys a Python Flask application using Gunicorn and systemd.
3. **Node.js:** Deploys a Node.js application managed by systemd.

## Architecture

- **Control Node:** Ubuntu laptop running Ansible.
- **Managed Node:** Remote Ubuntu laptop managed over SSH.
- **Automation:** Ansible playbooks and reusable roles.

## Project Structure

```text
ansible-multi-app-deployment/
├── ansible.cfg
├── site.yml
├── inventory/
│   ├── hosts.example.ini
│   └── hosts.ini
├── group_vars/
│   └── web.yml
└── roles/
    ├── nginx/
    ├── flask_app/
    └── node_app/
```

## Technologies Used

- Ansible
- Ubuntu Linux
- Nginx
- Python
- Flask
- Gunicorn
- Node.js
- systemd
- SSH
- Git and GitHub

## Application Endpoints

After successful deployment:

| Application | URL |
|---|---|
| Flask | `http://MANAGED-NODE-IP/flask/` |
| Flask health | `http://MANAGED-NODE-IP/flask/health` |
| Node.js | `http://MANAGED-NODE-IP/node/` |
| Node.js health | `http://MANAGED-NODE-IP/node/health` |

## Deployment Instructions

1. Install Ansible on the control node.
2. Configure SSH access to the managed Ubuntu machine.
3. Copy `inventory/hosts.example.ini` to `inventory/hosts.ini`.
4. Update the inventory with the managed node's IP address and SSH username.
5. Run the syntax check:

```bash
ansible-playbook site.yml --syntax-check
```

6. Deploy the applications:

```bash
ansible-playbook site.yml --ask-pass --ask-become-pass
```

## Security

- Real inventory details are excluded from Git.
- SSH private keys and credentials must never be committed.
- Authentication credentials should be supplied securely outside the repository.

## Project Objective

To demonstrate infrastructure automation, reusable Ansible roles, remote application deployment, service management, and Nginx reverse proxy configuration.
