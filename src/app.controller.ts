import { Controller, Get } from "@nestjs/common";

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return "root route reply";
  }
}

export default AppController;
