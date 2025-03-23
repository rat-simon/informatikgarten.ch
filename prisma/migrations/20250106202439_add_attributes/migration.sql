-- CreateTable
CREATE TABLE "item_types" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "item_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "item_type_id" INTEGER NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_attributes" (
    "id" SERIAL NOT NULL,
    "item_id" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "true_false" BOOLEAN,
    "value" TEXT NOT NULL,

    CONSTRAINT "item_attributes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "item_attributes_item_id_type_id_idx" ON "item_attributes"("item_id", "type_id");

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_item_type_id_fkey" FOREIGN KEY ("item_type_id") REFERENCES "item_types"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_attributes" ADD CONSTRAINT "item_attributes_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_attributes" ADD CONSTRAINT "item_attributes_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "item_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
