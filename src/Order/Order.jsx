import  { useState } from "react";
import {
  Drawer,
  IconButton,
  Typography,
  Divider,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Close icon from MUI
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import "./Order.css"

export default function Orderlist() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.carts); // Access cart items from Redux
  const dispatch = useDispatch();

  const handleClose = () => setIsOpen(false);

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <HiOutlineShoppingBag size={24} />
        {cartItems.length > 0 && (
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 -mt-1 -mr-1 text-xs font-bold text-white bg-red-500 rounded-full">
            {cartItems.length}
          </span>
        )}
      </IconButton>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "40%",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            borderRadius:"10px",
            // Ensures the close button stays positioned
          },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "16px",
            right: "16px",
            color: "gray",
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Header */}
        <div style={{ marginTop: "30px",marginLeft:"10px" }}> {/* Adjust top margin to account for close button */}
          <Typography variant="h6" fontWeight="bold">
            Shopping Cart
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Reserved for <span style={{ color: "red" }}>01m 23s</span>
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Almost there, add <b>${(102 - subtotal).toFixed(2)} more</b> to get{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>FREE SHIPPING</span>.
          </Typography>
        </div>

        <Divider sx={{ my: 1 }} />

        {/* Cart Items */}
        <div  className="flex-1 p-4 overflow-auto custom-scrollbar">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
            <>  
            <div className="flex flex-row items-center justify-center">
              <div className="w-full p-5 border rounded-xl"
                key={index}
                style={{
                  display: "flex",
                  gap: "16px",
                 
                  alignItems: "center",
                  margin:"20px"
                }}
              >
                <img
                  src={item.image || "placeholder.jpg"}
                  alt={item.title || "Product"}
                  style={{
                    width: "130px",
                    height: "150px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <Typography fontWeight="bold">{item.title || "Untitled Product"}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Color: {item.color || "N/A"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Size: {item.size || "N/A"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Status: {item.status || "N/A"}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "8px",
                      gap:"10px"
                    }}
                  >
                    <Typography fontWeight="medium">
                      ${(item.price || 0).toFixed(2)}
                    </Typography>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <Button variant="outlined" size="small">
                        -
                      </Button>
                      <Typography>{item.quantity || 1}</Typography>
                      <Button variant="outlined" size="small">
                        +
                      </Button>
                    </div>
                  </div>
                </div>
                
               
              </div> 
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <IconButton
                    onClick={() => handleRemoveItem(item.id)}
                    style={{ background: "#f5f5f5", padding: "8px" }}
                  >
                    <FaTrashAlt size={16} color="#ff0000" />
                  </IconButton>
                  <IconButton style={{ background: "#f5f5f5", padding: "8px" }}>
                    <FaEdit size={16} />
                  </IconButton>
                </div>
              </div>
              
            </>  
          
            ))
          ) : (
            <div style={{ textAlign: "center", marginTop: "40px" ,display:"flex", flexDirection:"column", alignItems:"center"}}>
              <HiOutlineShoppingBag size={96} color="#e0e0e0" />
              <Typography variant="h6" fontWeight="bold" mt={2}>
                Your Cart is Empty
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                You have not added any products yet.
              </Typography>
              <a href="/catalog"  className="text-sm underline">
                Checkout our catalog
              </a>
            </div>
          )}
        </div>

        <Divider sx={{ my: 2 }} />

        {/* Footer */}
        {cartItems.length > 0 && (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">${subtotal.toFixed(2)} USD</Typography>
            </div>
            <TextField
              fullWidth
              placeholder="Order special instructions"
              size="small"
              multiline
              rows={2}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "16px",
              }}
            >
              <Button
                onClick={() => dispatch({ type: "CLEAR_CART" })}
                color="error"
                variant="text"
              >
                Clear cart
              </Button>
              <FormControlLabel
                control={<Checkbox />}
                label="I agree to the store policies"
                sx={{ fontSize: "0.875rem" }}
              />
            </div>
            <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
              <Button fullWidth variant="outlined">
                VIEW MY CART ({cartItems.length})
              </Button>
              <Button fullWidth variant="contained" color="primary">
                CHECKOUT
              </Button>
            </div>
          </div>
        )}
      </Drawer>
    </>
  );
}
