import React from "react";
import { default as ReactSelect, components } from "react-select";

const DropdownIndicator = (props) => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                <i className="fi fi-rs-angle-small-down text-gray-600 !leading-tight !text-[15px] !h-[15px]"></i>
            </components.DropdownIndicator>
        )
    );
};

const customStyles = {
    container: (base, state) => ({
        ...base,
        borderRadius: "8px",
    }),
    control: (base, state) => {
        const hasError =
            state.selectProps.className &&
            state.selectProps.className.includes('error');

        return {
            ...base,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(6px)",
            borderRadius: "8px",
            padding: "0px 4px",
            transition: "all 0.3s ease",
            fontWeight: 500,
            color: "#374151",
            cursor: "pointer",

            border: hasError
                ? "none"
                : "1px solid #D1D5DB",

            boxShadow: hasError
                ? "none"
                : "none",

            "&:hover": {
                borderColor: hasError
                    ? "none"
                    : "#D1D5DB",
            },
        };
    },

    menu: (base) => ({
        ...base,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(12px)",
        borderRadius: "16px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
        border: "1px solid rgba(229, 231, 235, 0.5)",
        marginTop: "8px",
        zIndex: 999999,
    }),
    menuList: (base) => ({
        ...base,
        padding: "8px",
        zIndex: 9999,
    }),
    option: (base, { isFocused, isSelected }) => ({
        ...base,
        fontWeight: 500,
        marginBottom: "6px",
        padding: "12px 16px",
        borderRadius: "12px",
        background: isSelected
            ? "#F5F5F5"
            : isFocused
                ? "#F5F5F5"
                : "transparent",
        color: "#374151",
        transition: "all 0.3s ease",
        cursor: "pointer",
    }),
    placeholder: (base) => ({
        ...base,
        color: "#6B7280",
        fontWeight: 500,
    }),
    singleValue: (base) => ({
        ...base,
        color: "#374151",
    }),
};

const Selector = (props) => {
    const optionsList = props.allowSelectAll
        ? [{ label: "Select All", value: "*" }, ...props.options]
        : [{ label: "Select", value: 0 }, ...props.options];

    return (
        <span
            className="d-inline-block custom-input"
            data-toggle="popover"
            data-trigger="focus"
            data-content="Please select account(s)"
        >
            <ReactSelect
                className="custom-checkbox-select"
                components={{ DropdownIndicator }}
                {...props}
                options={optionsList}
                menuPortalTarget={typeof window !== "undefined" ? document.body : null}
                menuPosition="fixed"
                styles={{
                    ...customStyles,
                    menuPortal: base => ({ ...base, zIndex: 999999 }),
                }}
                onChange={(selected) => {
                    if (
                        selected !== null &&
                        selected.length > 0 &&
                        (selected[selected.length - 1].value === "*" ||
                            selected[selected.length - 1].value === props.allOption?.value)
                    ) {
                        return props.onChange(props.options, props.drpIdentity);
                    }
                    return props.onChange(selected, props.drpIdentity);
                }}
                placeholder={props.placeholder || "Select option"}
                isMulti={props.isMulti}
            />
        </span>
    );
};

export default Selector;
