
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 2.65"
    }
  }
  required_version = ">= 0.14.9"
}
provider "azurerm" {
  features {}
}
resource "azurerm_resource_group" "rg" {
  name     = "CloudAppResourceGroup"
  location = "eastus"
}

resource "azurerm_app_service_plan" "appserviceplan" {
  name                = "CloudAppZaliczenie"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  sku {
    tier = "Free"
    size = "F1"
  }
}

resource "azurerm_app_service" "webapp" {
  name                = "CloudAppZaliczenie"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.appserviceplan.id
  source_control {
    repo_url           = "https://github.com/kazura2/cloud_app_administration.git"
    branch             = "master"
    manual_integration = true
    use_mercurial      = false
  }
}