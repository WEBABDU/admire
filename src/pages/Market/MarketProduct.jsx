import { CustomDatePicker, Input, Radio, Select } from "components";
import { useCheckAction } from "hooks/useCheckAction";
import { ModifyLayout } from "Layout/ModifyLayout/ModifyLayout";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productSchema } from "./productShame";

export const MarketProduct = () => {
  const { id, productId } = useParams();
  const user = useSelector((state) => state.user.user);
  const type = useCheckAction();

  
  return (
    <ModifyLayout
      schema={productSchema}
      breadcrumb={{ text: "Ma’lumot qo’shish", redirectUrl: `market/${id}` }}
      action={{
        type,
        getEndPoint: `market/${id}/acts/${productId}`,
        sumbitEndPoint: productId
          ? `market/${id}/update-action/${productId}`
          : `market/${id}/new-action`,
        dataMap: new Date(),
      }}
    >
      {(formik, showError) => (
        <>
          <div className="row">
            <div className="col-6 product__input">
              <label className="cre__label">Oldi</label>
              <div className="input__group">
                <Input
                  label="sum"
                  inputProps={formik.getFieldProps("sum")}
                  errorText={showError("sum")}
                />
              </div>
            </div>
            <div className="col-6 product__input">
              <label className="cre__label">Berdi</label>
              <div className="input__group">
                <Input
                  label="sum"
                  inputProps={formik.getFieldProps("received_money")}
                  errorText={showError("received_money")}
                />
              </div>
            </div>

            <div className="col-12 product__input">
              <label className="cre__label">Maxsulot turi</label>
              <div className="input__group">
                <Select
                  name={"type"}
                  label='Maxsulot turini tanlang'
                  inputProps={formik.getFieldProps("type")}
                  errorText={showError("type")}
                  options={user?.productTypes}
                />
              </div>
            </div>

            <div className="col-12 product__input">
              <label className="cre__label">To’lov turi</label>
              <div className="row">
                {user?.paymentTypes.map((o) => (
                  <div className="col-6" key={o.id}>
                    <div className="radio__group">
                      <Radio
                        label={o.value}
                        inputProps={formik.getFieldProps('payment_type')}
                        errorText={showError("payment_type")}
                        value={o.id}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 product__input">
              <label className="cre__label">Oldi berdi vaqti</label>
              <div className="input__group">
                <CustomDatePicker
                  errorText={showError("date")}
                  formik={formik}
                  inputProps={formik.getFieldProps("date")}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </ModifyLayout>
  );
};
