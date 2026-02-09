import { 
  Card, 
  CardContent 
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ProjectSection() {

  return (
    <section id='project'>
      <div className="mt-20 wrapper">
        <h2 className="text-base! text-primary">Feature Projects</h2>
        <h3 className="mt-2 text-3xl">Quik Technology</h3>
        <div className="my-5">
          <h4 className="text-lg font-bold">Dashboard</h4>
          <Card className="mt-2 p-0">
            <CardContent className=" aspect-video flex items-center justify-center p-4">
              <img alt='Dashboard' src="dashboard.png" />
            </CardContent>
          </Card>
        </div>
        <div className="xl:mt-10 flex flex-col xl:flex-row justify-between items-center">
          <div className="mt-10 xl:mt-0 xl:mr-20 xl:w-1/2">
            <h4 className="text-lg font-bold">Different POS Mode</h4>
            <p className="mt-1">Our POS system offers multiple interface styles that users can switch between effortlessly to match their preferences.</p>
          </div>
          <Carousel className="mt-5 xl:mt-0 xl:w- max-w-2xl">
            <CarouselContent>
                <CarouselItem>
                    <Card className="p-0">
                      <CardContent className=" aspect-video flex items-center justify-center p-4">
                        <img alt='POS in retail mode; primary use barcode scanner to add items.' src="pos-retail.png" />
                      </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="p-0">
                    <CardContent className="aspect-video flex items-center justify-center p-4">
                      <img alt='POS in menu mode; have menu like to help select items.' src="pos-menu.png" />
                    </CardContent>
                  </Card>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="xl:mt-10 flex flex-col-reverse xl:flex-row justify-between items-center">
          <Carousel className="mt-5 xl:mt-0 w-full max-w-2xl">
            <CarouselContent>
                <CarouselItem>
                    <Card className="p-0">
                      <CardContent className=" aspect-video flex items-center justify-center p-4">
                        <img alt='Inventory general information control.' src="inventory-general.png" />
                      </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="p-0">
                    <CardContent className="aspect-video flex items-center justify-center p-4">
                      <img alt='Inventory unit of measure control.' src="inventory-uom.png" />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="p-0">
                    <CardContent className="aspect-video flex items-center justify-center p-4">
                      <img alt='Inventory and discount group relation control.' src="inventory-discount.png" />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="p-0">
                    <CardContent className="aspect-video flex items-center justify-center p-4">
                      <img alt='Replenishment alert and expiry alert control.' src="inventory-replenishment.png" />
                    </CardContent>
                  </Card>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="mt-10 xl:mt-0 xl:ml-20 xl:w-1/2">
            <h4 className="text-lg font-bold">In Depth Inventory Management</h4>
            <p className="mt-1">The inventory management system supports everything from basic item information to advanced features such as custom units of measure, pricing and discount groups, and automatic alerts for low stock or approaching expiry dates.</p>
          </div>
        </div>
      </div>
    </section>
  )
}