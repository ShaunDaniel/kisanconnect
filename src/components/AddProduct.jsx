import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Text,
  NumberInput,
  InputGroup,
  NumberInputField,
  InputLeftElement,
  InputRightElement,
  Icon,
  Select,
  Stack,
  Textarea,
  Heading,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import categoriesData from './data/categoriesData.json';
import { FaRupeeSign } from 'react-icons/fa';
import productService from '../services/productService';
import { useUser } from '../contexts/UserContext';

const AddProduct = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showProductNameInput, setShowProductNameInput] = useState(false);
  const [image, setImage] = useState(null);
  const toast = useToast();
  const { user } = useUser()


  const onSubmit = async (data) => {
    data.addedBy = user.id;
    await toast.promise(productService.createProduct(data,image), {
      loading: {title:"Submitting...",description:'Adding product'},
      success: {title:"Product added successfully!",description:'Product added successfully!'},
      error: {title:"An error occurred. Please try again.",description:'An error occurred. Please try again.'},
    });
  }
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    console.log(category);
    setSelectedCategory(category);
  };

  const handleItemChange = (event) => {
    const item = event.target.value;
    setShowProductNameInput(item === 'other');
  }

  const handleImageChange = (event) => {
    console.log(event.target.files[0])
    setImage(event.target.files[0]);
  };

  const selectedItems = selectedCategory && selectedCategory !== 'Other'
    ? categoriesData.categories[selectedCategory].items
    : [];

  return (
    <>
      <Box maxW="xl" mx="auto" mb={10} p={5} borderWidth={1} borderRadius="lg">
        <Heading mb={5} fontSize={'4xl'}>List your product on KisanConnect</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>

            <FormControl isInvalid={errors.category}>
              <FormLabel>Category</FormLabel>
              <Select
                placeholder="Select category"
                {...register('category', { required: 'Category is required' })}
                onChange={handleCategoryChange}
              >
                {Object.keys(categoriesData.categories).map((category, index) => (
                  <option key={index} value={category}>
                    {categoriesData.categories[category].emoji} {category}
                  </option>
                ))}
                <option value="Other">Other</option>
              </Select>
              <FormErrorMessage>{errors.category && errors.category.message}</FormErrorMessage>
            </FormControl>

            {selectedItems.length > 0 && (
              <FormControl isInvalid={errors.productName}>
                <FormLabel>Product</FormLabel>
                <Select
                  placeholder="Select item"
                  {...register('productName', { required: 'Item is required' })}
                  onChange={handleItemChange}
                >
                  {selectedItems.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name} ({item.localName})
                    </option>
                  ))}
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{errors.productName && errors.productName.message}</FormErrorMessage>
              </FormControl>
            )}

            {showProductNameInput && (
              <FormControl isInvalid={errors.productNameOther}>
                <FormLabel>Product Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter product name"
                  {...register('productNameOther', { required: 'Product name is required' })}
                />
                <FormErrorMessage>{errors.productNameOther && errors.productNameOther.message}</FormErrorMessage>
              </FormControl>
            )}

            <FormControl isInvalid={errors.variety}>
              <FormLabel>Variety</FormLabel>
              <Input
                type="text"
                placeholder="Enter variety"
                {...register('variety', { required: 'Variety is required' })}
              />
              <FormErrorMessage>{errors.variety && errors.variety.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.grade}>
              <FormLabel>Grade</FormLabel>
              <Select
                placeholder="Select grade"
                {...register('grade', { required: 'Grade is required' })}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </Select>
              <FormErrorMessage>{errors.grade && errors.grade.message}</FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isInvalid={errors.image}>
            <FormLabel>Attach Image</FormLabel>
            <InputGroup>
              <Input type="text" value={image ? image.name : ""} placeholder={image ? image.name : "No file chosen"} isReadOnly />
              <InputRightElement width="auto">
                <label>
                  <Input type="file" {...register('image', { required: 'Image is required' })}  accept="image/*" onChange={handleImageChange} hidden />
                  <Button as="span">Browse</Button>
                </label>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors.image && errors.image.message }</FormErrorMessage>
          </FormControl>

            <FormControl isInvalid={errors.quantityAvailable || errors.quantityUnit}>
              <FormLabel>Quantity Available</FormLabel>
              <Stack direction="row" spacing={4}>
                <NumberInput min={0} flex="1">
                  <NumberInputField
                    placeholder="Enter quantity"
                    {...register('quantityAvailable', { required: 'Quantity is required' })}
                  />
                </NumberInput>
                <Select
                  flex="1"
                  {...register('quantityUnit', { required: 'Unit is required' })}
                >
                  <option value="">Select unit</option>
                  <option value="kg">Kilogram (kg)</option>
                  <option value="quintal">Quintal</option>
                  <option value="MT">Metric Ton (MT)</option>
                  <option value="L">Litre (L)</option>
                  <option value="pc">Piece (pc)</option>
                </Select>
              </Stack>
              <FormErrorMessage>{errors.quantityAvailable && errors.quantityAvailable.message}</FormErrorMessage>
              <FormErrorMessage>{errors.quantityUnit && errors.quantityUnit.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.price || errors.unit}>
              <FormLabel>Price per Unit</FormLabel>
              <Stack direction="row" spacing={4}>
                <InputGroup flex="1">
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FaRupeeSign} color="gray.300" />
                  </InputLeftElement>
                  <NumberInput min={0} flex="1" w="100%">
                    <NumberInputField
                      pl={10}
                      placeholder="Enter price"
                      {...register('price', { required: 'Price is required' })}
                    />
                  </NumberInput>
                </InputGroup>
                <Select
                  
                  flex="1"
                  {...register('unit', { required: 'Unit is required' })}
                >
                  <option value="">Select unit</option>
                  <option value="kg">per Kilogram (kg)</option>
                  <option value="quintal">per Quintal</option>
                  <option value="MT">per Metric Ton (MT)</option>
                  <option value="g">per Gram (g)</option>
                  <option value="L">per Litre (L)</option>
                  <option value="ml">per Millilitre (ml)</option>
                  <option value="dozen">per Dozen</option>
                  <option value="piece">per Piece</option>
                </Select>
              </Stack>
              <FormErrorMessage>{errors.price && errors.price.message}</FormErrorMessage>
              <FormErrorMessage>{errors.unit && errors.unit.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.harvestDate}>
              <FormLabel>Harvest Date</FormLabel>
              <Input
                type="date"
                {...register('harvestDate', { required: 'Harvest date is required' })}
              />
              <FormErrorMessage>{errors.harvestDate && errors.harvestDate.message}</FormErrorMessage>
            </FormControl>

            <FormControl >
              <FormLabel>Expected Shelf Life (Days)</FormLabel>
              <NumberInput min={0}>
                <NumberInputField
                  placeholder="Enter shelf life"
                  {...register('expectedShelfLife')}
                />
              </NumberInput>
              <FormErrorMessage>{errors.expectedShelfLife && errors.expectedShelfLife.message}</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel>Organic?</FormLabel>
              <Checkbox {...register('organic')}>This product is organic.</Checkbox>
            </FormControl>

            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Enter product description (optional)"
                {...register('description')}
              />
            </FormControl>

            <Button type="submit" colorScheme="blue" mt={4}>
              Add Product
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default AddProduct;